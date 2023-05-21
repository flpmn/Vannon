using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.Models
{
    public class Locacao
    {
        public int Id { get; set; }
        public Filme Filme { get; set; }
        public Cliente Cliente { get; set; }
        public DateTime DataLocacao { get; set; }
        public DateTime DataDevolucao { get; set; }
        public DateTime DataCriacao { get; set; }
    }
}
