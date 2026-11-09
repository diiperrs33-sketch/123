using System.Globalization;

namespace HotelAurora.Models;
public class Quarto
{
    private decimal _valorDiaria;
    private int _capacidade;

    public string Nome { get; }

    public decimal ValorDiaria
    {
        get => _valorDiaria;
        private set
        {
            if (value <= 0)
                throw new ArgumentException("O valor da diária deve ser positivo.");
            _valorDiaria = value;
        }
    }

    public int Capacidade
    {
        get => _capacidade;
        private set
        {
            if (value < 1)
                throw new ArgumentException("A capacidade deve ser pelo menos uma pessoa.");
            _capacidade = value;
        }
    }

    public Quarto(string nome, decimal valorDiaria, int capacidade)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ArgumentException("Informe o nome do quarto.");

        Nome = nome;
        ValorDiaria = valorDiaria;
        Capacidade = capacidade;
    }

    public bool AceitaHospedes(int adultos, int criancas) =>
        adultos >= 1 && criancas >= 0 && adultos + criancas <= Capacidade;

    public override string ToString() =>
        $"{Nome} - {ValorDiaria.ToString("C0", CultureInfo.GetCultureInfo("pt-BR"))}/diária";
}
