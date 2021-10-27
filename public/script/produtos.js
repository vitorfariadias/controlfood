class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  }

  salvar() {
    let produto = this.lerDados();

    if (this.validaCampos(produto)) {
      if (this.editId == null) {
        this.adicionar(produto);
      } else {
        this.atualizar(this.editId, produto);
      }
    }

    this.listaTabela();
    this.cancelar();
  }

  listaTabela() {
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valorv = tr.insertCell();
      let td_valorc = tr.insertCell();
      let td_descricao = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valorv.innerText = this.arrayProdutos[i].valorv;
      td_valorc.innerText = this.arrayProdutos[i].valorc;
      td_descricao.innerText = this.arrayProdutos[i].descricao;

      let imgEdit = document.createElement('img');
      imgEdit.src = '/public/images/edit.svg';
      imgEdit.setAttribute(
        'onclick',
        'produto.preparaEditacao(' + JSON.stringify(this.arrayProdutos[i]) + ')'
      );
      imgEdit.addEventListener('click', function () {
        document.querySelector('.bg-modal').style.display = 'block';
      });

      let imgDelete = document.createElement('img');
      imgDelete.src = '/public/images/delete.svg';
      imgDelete.setAttribute(
        'onclick',
        'produto.deletar(' + this.arrayProdutos[i].id + ')'
      );

      td_acoes.appendChild(imgEdit);
      td_acoes.appendChild(imgDelete);

      console.log(this.arrayProdutos);
    }
  }

  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  atualizar(id, produto) {
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
        this.arrayProdutos[i].valorv = produto.valorv;
        this.arrayProdutos[i].valorc = produto.valorc;
        this.arrayProdutos[i].descricao = produto.descricao;
      }
    }
  }

  preparaEditacao(dados) {
    this.editId = dados.id;

    document.getElementById('produto').value = dados.nomeProduto;
    document.getElementById('valorv').value = dados.valorv;
    document.getElementById('valorc').value = dados.valorc;
    document.getElementById('descricao').value = dados.descricao;

    document.getElementById('btn1').innerText = 'atualizar';
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value;

    produto.valorv = document.getElementById('valorv').value;

    produto.valorc = document.getElementById('valorc').value;

    produto.descricao = document.getElementById('descricao').value;

    return produto;
  }

  validaCampos(produto) {
    let msg = '';

    if (produto.nomeProduto == '') {
      msg += '- Informe o nome do Produto \n';
    }

    if (produto.valorv == '') {
      msg += '- Informe o valor de venda do Produto \n';
    }

    if (produto.valorc == '') {
      msg += '- Informe o valor de custo do Produto \n';
    }

    if (msg != '') {
      alert(msg);
      return false;
    }

    return true;
  }

  cancelar() {
    document.getElementById('produto').value = '';
    document.getElementById('valorv').value = '';
    document.getElementById('valorc').value = '';
    document.getElementById('descricao').value = '';

    document.getElementById('btn1').innerText = 'Salvar';
    this.editId = null;
  }

  deletar(id) {
    if (confirm('Deseja realmente deletar o produto do ID: ' + id)) {
      let tbody = document.getElementById('tbody');

      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}

var produto = new Produto();

document.getElementById('add').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementById('close_pop').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('add_pop').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'none';
});
