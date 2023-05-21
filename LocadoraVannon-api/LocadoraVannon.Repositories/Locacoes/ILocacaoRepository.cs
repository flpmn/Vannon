using LocadoraVannon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.Repositories.Locacoes
{
    public interface ILocacaoRepository
    {
        List<Locacao> Get();
        Locacao Get(int id);
        void Add(Locacao locacao);
        void Update(Locacao locacao);
        void Delete(int id);
    }
}
