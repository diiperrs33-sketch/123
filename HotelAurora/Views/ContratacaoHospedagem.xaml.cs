using HotelAurora.Models;
using System.Globalization;

namespace HotelAurora.Views;

public partial class ContratacaoHospedagem : ContentPage
{
    private static readonly CultureInfo Moeda = CultureInfo.GetCultureInfo("pt-BR");

    public ContratacaoHospedagem()
    {
        InitializeComponent();
        pckQuarto.ItemsSource = CatalogoQuartos.Carregar();
        pckQuarto.SelectedIndex = 0;

        var hoje = DateTime.Today;
        dtpCheckin.MinimumDate = hoje;
        dtpCheckin.MaximumDate = hoje.AddYears(1);
        dtpCheckout.MaximumDate = hoje.AddYears(1).AddDays(30);
        dtpCheckin.Date = hoje;
        dtpCheckout.MinimumDate = hoje.AddDays(1);
        dtpCheckout.Date = hoje.AddDays(1);
        AtualizarPrevia();
    }

    private void OnCheckinAlterado(object sender, DateChangedEventArgs e)
    {
        if (e.NewDate is not DateTime entrada)
            return;

        var proximaSaida = entrada.Date.AddDays(1);
        dtpCheckout.MinimumDate = proximaSaida;
        if (dtpCheckout.Date is not DateTime saida || saida.Date < proximaSaida)
            dtpCheckout.Date = proximaSaida;

        AtualizarPrevia();
    }

    private void OnDadosAlterados(object sender, EventArgs e) => AtualizarPrevia();

    private void OnQuantidadeAlterada(object sender, ValueChangedEventArgs e) => AtualizarPrevia();

    private void AtualizarPrevia()
    {
        if (lblPrevia is null || lblCapacidade is null || pckQuarto is null ||
            dtpCheckin is null || dtpCheckout is null ||
            stpAdultos is null || stpCriancas is null)
            return;

        if (pckQuarto.SelectedItem is not Quarto quarto)
        {
            lblCapacidade.Text = "Selecione um quarto";
            lblPrevia.Text = "Escolha os dados para conferir o valor";
            return;
        }

        int pessoas = (int)(stpAdultos.Value + stpCriancas.Value);
        lblCapacidade.Text = $"Até {quarto.Capacidade} pessoas (selecionadas: {pessoas})";
        lblCapacidade.TextColor = quarto.AceitaHospedes((int)stpAdultos.Value, (int)stpCriancas.Value)
            ? Color.FromArgb("#737974") : Color.FromArgb("#A33333");

        if (dtpCheckin.Date is DateTime entrada && dtpCheckout.Date is DateTime saida && saida.Date > entrada.Date)
        {
            int diarias = (saida.Date - entrada.Date).Days;
            decimal total = quarto.ValorDiaria * diarias;
            lblPrevia.Text = $"{diarias} {(diarias == 1 ? "diária" : "diárias")} - {total.ToString("C", Moeda)}";
        }
        else
        {
            lblPrevia.Text = "Confira as datas da hospedagem";
        }
    }

    private async void OnAvancarClicked(object sender, EventArgs e)
    {
        if (pckQuarto.SelectedItem is not Quarto quarto)
        {
            await DisplayAlert("Quarto", "Selecione uma suíte para continuar.", "OK");
            return;
        }

        if (dtpCheckin.Date is not DateTime entrada || dtpCheckout.Date is not DateTime saida)
        {
            await DisplayAlert("Datas", "Informe a entrada e a saída.", "OK");
            return;
        }

        var hospedagem = new Hospedagem
        {
            Adultos = (int)stpAdultos.Value,
            Criancas = (int)stpCriancas.Value,
            Quarto = quarto,
            Checkin = entrada,
            Checkout = saida
        };

        string? erro = hospedagem.Validar();
        if (erro is not null)
        {
            await DisplayAlert("Confira os dados", erro, "OK");
            return;
        }
        await Navigation.PushAsync(new HospedagemContratada { BindingContext = hospedagem });
    }
}
