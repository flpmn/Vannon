using LocadoraVannon.API.DataBase;
using LocadoraVannon.Models;
using LocadoraVannon.Repositories.Filmes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.API.Repositories.Filmes
{
    public class FilmeRepository : IFilmeRepository
    {
        private readonly LocadoraVannonContext _db;
        public FilmeRepository(LocadoraVannonContext db)
        {
            _db = db;
        }
        public void Add(Filme filme)
        {
            _db.Filmes.Add(filme);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            _db.Filmes.Remove(this.Get(id));
            _db.SaveChanges();
        }

        public List<Filme> Get()
        {
            return _db.Filmes.OrderBy(x => x.Titulo).ToList();
        }

        public Filme Get(int id)
        {
            return _db.Filmes.Find(id);
        }

        public void Update(Filme filme)
        {
            _db.Filmes.Update(filme);
            _db.SaveChanges();
        }
    }
}
