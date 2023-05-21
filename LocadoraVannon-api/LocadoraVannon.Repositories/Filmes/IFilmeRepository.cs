using LocadoraVannon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.Repositories.Filmes
{
    public interface IFilmeRepository
    {
        List<Filme> Get();
        Filme Get(int id);
        void Add(Filme filme);
        void Update(Filme filme);
        void Delete(int id);
    }
}
