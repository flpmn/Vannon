using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string? Endereco{ get; set; }
        public string? Cidade { get; set;}
        public string? UF { get; set;}
        public Usuario Usuario { get; set;}
        public DateTime DataCriacao { get; set;}
    }
}
