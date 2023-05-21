using LocadoraVannon.Models;
using LocadoraVannon.API.Repositories.Usuarios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LocadoraVannon.API.Controllers
{
    [Route("api/usuarios")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;

        public UsuariosController(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult Get() 
        {
            var listaUsuarios = _repository.Get();
            return Ok(listaUsuarios);
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult Get(int id)
        {
            var usuario = _repository.Get(id);
            if (usuario == null)
            {
                return NotFound("Nao encontrado!");
            }
            return Ok(usuario);
        }
        [HttpPost]
        public ActionResult Add([FromBody] Usuario usuario)
        {
            _repository.Add(usuario);
            return Ok(usuario);
        }
        [HttpPut]
        public ActionResult Update([FromBody] Usuario usuario)
        {
            _repository.Update(usuario);
            return Ok(usuario);
        }
        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            _repository.Delete(id);
            return Ok();
        }
    }
}
