using System.Globalization;

namespace HotelAurora.Models;

public class Quarto
{
    public string Nome { get; set; } = string.Empty;
    public decimal ValorDiaria { get; set; }

    public override string ToString() =>
        $"{Nome}  •  {ValorDiaria.ToString("C0", CultureInfo.GetCultureInfo("pt-BR"))}/diária";
}
