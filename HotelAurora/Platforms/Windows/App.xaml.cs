using Microsoft.UI.Xaml;

namespace HotelAurora.WinUI;

public partial class App : MauiWinUIApplication
{
    public App()
    {
        InitializeComponent();
    }

    protected override MauiApp CreateMauiApp() => global::HotelAurora.MauiProgram.CreateMauiApp();
}
