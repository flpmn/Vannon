using LocadoraVannon.Models;
using Microsoft.EntityFrameworkCore;

namespace LocadoraVannon.API.DataBase
{
    public class LocadoraVannonContext: DbContext
    {
        public LocadoraVannonContext(DbContextOptions<LocadoraVannonContext> options): base(options) { }
        
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Filme> Filmes { get; set; }
        public DbSet<Locacao> Locacoes { get; set; }
    }
}
