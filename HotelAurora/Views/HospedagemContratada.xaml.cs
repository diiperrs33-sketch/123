namespace HotelAurora.Views;
public partial class HospedagemContratada : ContentPage
{
    public HospedagemContratada() { InitializeComponent(); }
    private async void OnVoltarClicked(object sender, EventArgs e) => await Navigation.PopAsync();
}