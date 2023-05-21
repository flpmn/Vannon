using LocadoraVannon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraVannon.API.Repositories.Clientes
{
    public interface IClienteRepository
    {
        List<Cliente> Get();
        Cliente Get(int id);
        void Add(Cliente cliente);
        void Update(Cliente cliente);
        void Delete(int id);
    }
}
