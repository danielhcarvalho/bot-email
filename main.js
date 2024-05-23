const assunto_div = document.querySelector('#assunto div'), tipo_assunto = document.querySelector('#assunto select'), mensagem_textarea = document.querySelector('#mensagem textarea');
const [assunto, cargo, empresa, nome_usuario, curso_usuario, link_linkedin, curriculo] = '';
const mensagem = `
Prezados Recutadores da ${empresa},

Meu nome é ${nome_usuario}, estudante de ${curso_usuario}. Gostaria de me candidatar à vaga de estágio para ${cargo}.

Tenho conhecimentos em Java e JavaScript, além de Python e Git, e estou entusiasmado com a oportunidade de trabalhar na ${empresa}. Possuo habilidades de depuração, solução de problemas e comunicação, que acredito serem valiosas para a posição.

Estou à disposição para uma entrevista e agradeço pela consideração da minha candidatura.

Atenciosamente,

${nome_usuario}
${link_linkedin}

${curriculo}
`;  
mensagem_textarea.textContent = mensagem ;

function TipoAssunto()
{


    if(tipo_assunto.value === 'assunto_pre_definido')
    {
        const assunto_input = document.querySelector('#assunto .input_adicionado');

        if (!assunto_input)
            {
                const assunto_input = document.createElement('input');
                
                assunto_div.style = 'grid-template-columns: 1fr; ';
                assunto_input.className = 'input_adicionado';
                assunto_input.style = 'margin-top: -10px;'
                document.querySelector('#assunto').style = 'align-items: start;'
                assunto_div.appendChild(assunto_input);
            }

    } else
    {
        const assunto_input = document.querySelector('#assunto .input_adicionado');

        if (assunto_input)
            {
                assunto_input.remove();
                assunto_div.style = 'grid-template-columns: 1fr 2fr;';
                document.querySelector('#assunto').style = 'align-items: center;;'
            }
    }

}

function FormatarMensagem()
{
    nome_usuario = document.querySelector('#nome input').value;
    cargo = document.querySelector('#cargo input').value;
    empresa = document.querySelector('#empresa input').value;
    link_linkedin = document.querySelector('#linkedin input').value;
    curriculo = document.querySelector('#curriculo input').value;

    if (tipo_assunto.value === 'assunto_pre_definido')
    {
        assunto = assunto_input.value;

        if (assunto = '')
        {
            confirm('O campo assunto está vazio! Deseja inserir um assunto automático para o email?');
        }

    } else
    {
        assunto = `Candidatura à Vaga - ${cargo}` ;
    }
}