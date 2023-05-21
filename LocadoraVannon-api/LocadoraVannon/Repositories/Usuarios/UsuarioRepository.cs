using LocadoraVannon.API.DataBase;
using LocadoraVannon.Models;
using LocadoraVannon.Repositories.Usuarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.API.Repositories.Usuarios
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly LocadoraVannonContext _db;
        public UsuarioRepository(LocadoraVannonContext db)
        {
            _db = db;
        }
        public void Add(Usuario usuario)
        {
            _db.Usuarios.Add(usuario);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            _db.Usuarios.Remove(this.Get(id));
            _db.SaveChanges();
        }

        public List<Usuario> Get()
        {
            return _db.Usuarios.OrderBy(x=>x.Nome).ToList();
        }

        public Usuario Get(int id)
        {
            return _db.Usuarios.Find(id);
        }

        public void Update(Usuario usuario)
        {
            _db.Usuarios.Update(usuario);
            _db.SaveChanges();
        }
    }
}
