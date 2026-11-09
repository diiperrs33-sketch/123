namespace HotelAurora.Models;
public static class CatalogoQuartos
{
    public static List<Quarto> Carregar() => new()
    {
        new Quarto("Suíte Standard", 220m, 2),
        new Quarto("Suíte Vista Jardim", 310m, 4),
        new Quarto("Suíte Premium", 450m, 6)
    };
}
