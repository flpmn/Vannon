using LocadoraVannon.API.DataBase;
using LocadoraVannon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.API.Repositories.Clientes
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly LocadoraVannonContext _db;
        public ClienteRepository(LocadoraVannonContext db)
        {
            _db = db;
        }
        public void Add(Cliente cliente)
        {
            if (cliente.Usuario != null)
            {
                Usuario usuario = cliente.Usuario;
                cliente.Usuario = new Usuario();
                cliente.Usuario = usuario;
            }    
            _db.Clientes.Add(cliente);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            _db.Clientes.Remove(this.Get(id));
            _db.SaveChanges();
        }

        public List<Cliente> Get()
        {
            return _db.Clientes.OrderBy(x => x.Usuario.Nome).ToList();
        }

        public Cliente Get(int id)
        {
            return _db.Clientes.Find(id);
        }

        public void Update(Cliente cliente)
        {
            _db.Clientes.Update(cliente);
            _db.SaveChanges();
        }
    }
}
