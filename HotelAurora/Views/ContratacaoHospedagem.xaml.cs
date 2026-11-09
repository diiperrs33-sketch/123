using HotelAurora.Models;
namespace HotelAurora.Views;
public partial class ContratacaoHospedagem : ContentPage
{
    public ContratacaoHospedagem()
    {
        InitializeComponent();
        pckQuarto.ItemsSource = new List<Quarto>
        {
            new() { Nome = "Suíte Standard", ValorDiaria = 220m },
            new() { Nome = "Suíte Vista Jardim", ValorDiaria = 310m },
            new() { Nome = "Suíte Premium", ValorDiaria = 450m }
        };
        pckQuarto.SelectedIndex = 0;
        var hoje = DateTime.Today;
        dtpCheckin.MinimumDate = hoje;
        dtpCheckin.Date = hoje;
        dtpCheckout.MinimumDate = hoje.AddDays(1);
        dtpCheckout.Date = hoje.AddDays(1);
    }
    private void OnCheckinAlterado(object sender, DateChangedEventArgs e)
    {
        if (e.NewDate is not DateTime checkin) return;
        var primeiraSaida = checkin.Date.AddDays(1);
        dtpCheckout.MinimumDate = primeiraSaida;
        if (dtpCheckout.Date is null || dtpCheckout.Date.Value.Date < primeiraSaida)
            dtpCheckout.Date = primeiraSaida;
    }
    private async void OnAvancarClicked(object sender, EventArgs e)
    {
        if (pckQuarto.SelectedItem is not Quarto quarto)
        {
            await DisplayAlert("Acomodação", "Escolha um quarto.", "OK");
            return;
        }
        if (dtpCheckin.Date is not DateTime entrada ||
            dtpCheckout.Date is not DateTime saida || saida.Date <= entrada.Date)
        {
            await DisplayAlert("Datas", "A saída precisa ser depois da entrada.", "OK");
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
        await Navigation.PushAsync(new HospedagemContratada { BindingContext = hospedagem });
    }
}