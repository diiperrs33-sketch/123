namespace HotelAurora.Models;

public class Hospedagem
{
    public int Adultos { get; init; }
    public int Criancas { get; init; }
    public required Quarto Quarto { get; init; }
    public DateTime Checkin { get; init; }
    public DateTime Checkout { get; init; }

    public int Diarias => (Checkout.Date - Checkin.Date).Days;
    public string NomeQuarto => Quarto.Nome;
    public decimal ValorDiaria => Quarto.ValorDiaria;
    public decimal Total => Diarias * ValorDiaria;
    public string ResumoHospedes => $"{Adultos} {(Adultos == 1 ? "adulto" : "adultos")} e {Criancas} {(Criancas == 1 ? "criança" : "crianças")}";
    public string ResumoCapacidade => $"até {Quarto.Capacidade} pessoas";
    public string? Validar()
    {
        if (Adultos < 1 || Criancas < 0)
            return "Informe pelo menos um adulto.";
        if (!Quarto.AceitaHospedes(Adultos, Criancas))
            return $"A {Quarto.Nome} comporta até {Quarto.Capacidade} pessoas.";
        if (Checkin.Date < DateTime.Today)
            return "A data de entrada não pode estar no passado.";
        if (Checkout.Date <= Checkin.Date)
            return "A saída precisa ser depois da entrada.";
        if (Diarias > 30)
            return "O período máximo é de 30 diárias.";
        return null;
    }
}
