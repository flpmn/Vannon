using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.Models
{
    public class Filme
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string? Categoria { get; set; }
        public int? AnoLancamento { get; set; }
        public string Status { get; set; }
        public DateTime DataCriacao { get; set;}
    }
}
