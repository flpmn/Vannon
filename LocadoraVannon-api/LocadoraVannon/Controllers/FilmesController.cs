using LocadoraVannon.API.Repositories.Filmes;
using LocadoraVannon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LocadoraVannon.API.Controllers
{
    [Route("api/filmes")]
    [ApiController]
    public class FilmesController : ControllerBase
    {
        private readonly IFilmeRepository _repository;

        public FilmesController(IFilmeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var listaFilmes = _repository.Get();
            return Ok(listaFilmes);
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult Get(int id)
        {
            var filme = _repository.Get(id);
            if (filme == null)
            {
                return NotFound("Nao encontrado!");
            }
            return Ok(filme);
        }
        [HttpPost]
        public ActionResult Add([FromBody] Filme filme)
        {
            _repository.Add(filme);
            return Ok(filme);
        }
        [HttpPut]
        public ActionResult Update([FromBody] Filme filme)
        {
            _repository.Update(filme);
            return Ok(filme);
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
