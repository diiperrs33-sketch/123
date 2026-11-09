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
    public decimal Total => ValorDiaria * Diarias;
    public string ResumoHospedes => $"{Adultos} {(Adultos == 1 ? "adulto" : "adultos")} e {Criancas} {(Criancas == 1 ? "criança" : "crianças")}";
}
