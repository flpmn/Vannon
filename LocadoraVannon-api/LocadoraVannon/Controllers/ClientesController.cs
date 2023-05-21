using LocadoraVannon.API.Repositories.Clientes;
using LocadoraVannon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LocadoraVannon.API.Controllers
{
    [Route("api/clientes")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly IClienteRepository _repository;

        public ClientesController(IClienteRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var listaClientes = _repository.Get();
            return Ok(listaClientes);
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult Get(int id)
        {
            var cliente = _repository.Get(id);
            if (cliente == null)
            {
                return NotFound("Nao encontrado!");
            }
            return Ok(cliente);
        }
        [HttpPost]
        public ActionResult Add([FromBody] Cliente cliente)
        {
            _repository.Add(cliente);
            return Ok(cliente);
        }
        [HttpPut]
        public ActionResult Update([FromBody] Cliente cliente)
        {
            _repository.Update(cliente);
            return Ok(cliente);
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
