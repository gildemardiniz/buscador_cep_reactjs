
import { useState } from 'react';
import './app.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function App() {

  const [endereco, setEndereco] = useState({});


  function capturandoCep(evento){

    const cep = evento.target.value

    setEndereco({
      cep
    })

    if(cep && cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(dados => {
        setEndereco({
          cep: dados.cep,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          uf: dados.uf,
          ddd: dados.ddd,
        })
      })
    }
  }

  return (
    <div className="App">
      <section className="App-section">
        <form className="App-section-form" onSubmit={evento => evento.preventDefault()}>
          <h2>Buscador de CEP</h2>
         <div className='Busca-cep'>
         <TextField className="App-section-form-textfield"
            id="outlined-basic" 
            label="Digite o CEP" 
            variant="outlined"
            onChange={capturandoCep}
            color="primary"
            size='small'
            margin="dense"
          />
         </div>
          <div>
            <TextField
              size="small"
              margin="dense"
              value={endereco.rua}
              id="outlined-start-adornment"
              sx={{ m: 1, width: '98%'}}
              InputProps={{
                startAdornment: <InputAdornment position="start">Rua</InputAdornment>,
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              size="small"
              margin="dense"
              value={endereco.bairro}
              id="outlined-start-adornment"
              sx={{ m: 1}}
              InputProps={{
                startAdornment: <InputAdornment position="start">Bairro</InputAdornment>,
              }}
              variant="outlined"
            />
            <TextField
              size="small"
              margin="dense"
              value={endereco.cidade}
              id="outlined-start-adornment"
              sx={{ m: 1}}
              InputProps={{
                startAdornment: <InputAdornment position="start">Cidade</InputAdornment>,
              }}
              variant="outlined"
            />
            <TextField
              size="small"
              margin="dense"
              value={endereco.uf}
              id="outlined-start-adornment"
              sx={{ m: 1}}
              InputProps={{
                startAdornment: <InputAdornment position="start">UF</InputAdornment>,
              }}
              variant="outlined"
            />
          </div>
        </form>
      </section>
    </div>
);
}

export default App;
