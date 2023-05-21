using LocadoraVannon.API.DataBase;
using LocadoraVannon.Models;
using LocadoraVannon.Repositories.Locacoes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.API.Repositories.Locacoes
{
    public class LocacaoRepository : ILocacaoRepository
    {
        private readonly LocadoraVannonContext _db;
        public LocacaoRepository(LocadoraVannonContext db)
        {
            _db = db;
        }
        public void Add(Locacao locacao)
        {
            _db.Locacoes.Add(locacao);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            _db.Locacoes.Remove(this.Get(id));
            _db.SaveChanges();
        }

        public List<Locacao> Get()
        {
            return _db.Locacoes.OrderBy(x => x.DataLocacao).ToList();
        }

        public Locacao Get(int id)
        {
            return _db.Locacoes.Find(id);
        }

        public void Update(Locacao locacao)
        {
            _db.Locacoes.Update(locacao);
            _db.SaveChanges();
        }
    }
}
