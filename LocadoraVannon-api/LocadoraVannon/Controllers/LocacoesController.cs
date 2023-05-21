using LocadoraVannon.API.Repositories.Locacoes;
using LocadoraVannon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LocadoraVannon.API.Controllers
{
    [Route("api/locacoes")]
    [ApiController]
    public class LocacoesController : ControllerBase
    {
        private readonly ILocacaoRepository _repository;

        public LocacoesController(ILocacaoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var listaLocacoes = _repository.Get();
            return Ok(listaLocacoes);
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult Get(int id)
        {
            var locacao = _repository.Get(id);
            if (locacao == null)
            {
                return NotFound("Nao encontrado!");
            }
            return Ok(locacao);
        }
        [HttpPost]
        public ActionResult Add([FromBody] Locacao locacao)
        {
            _repository.Add(locacao);
            return Ok(locacao);
        }
        [HttpPut]
        public ActionResult Update([FromBody] Locacao locacao)
        {
            _repository.Update(locacao);
            return Ok(locacao);
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
