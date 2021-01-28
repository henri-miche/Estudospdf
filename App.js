import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import React ,{useState} from 'react';
import {Button,View,Text,Image} from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

export default () => {

  const [qqcoisa,setQqcois] =useState('tamo junto maluco')

  const [count, setCount] = useState(
  <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
          <Image source={require('./assets/brasaoTransarente.png')} style={{width:50,height:50}}/>
          <Text>PQPQPQPQPQPQPQPQ {qqcoisa}</Text>
  </View> );

       const element = <body>
  <div class="wrapper">
    <h1>Page 1</h1>
  </div>
  <div class="wrapper">
    <h1>Page 2</h1>
  </div>
  <div class="wrapper">
    <h1>Page 3</h1>
  </div>
</body>;

       var options2 = {
    html: '<h1>PDF TEST</h1>'
       };

const htmlContent = `
   <h1 style="text-align: center;"><strong>Welcome Guys</strong></h1><p style="text-align: center;">In This Tutorial we would learn about creating PDF File using HTML Text.</p><p style="text-align: center;"><strong>ReactNativeCode.com</strong></p>
`;

const htmlContent1 = `
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pdf Content</title>
    <link rel="stylesheet" href="estilo.css" />
    
</head>

<style>
*{
    box-sizing: border-box;
}

body{
    margin: 0px;
}

img {
    width: 70px;
    height: 70px;
    margin-left: 5px;
    margin-top: 5px;
    margin-right: 5px;
}
.ContainerCima{
    display: flex;
    flex-direction: row;
}
.Inteira{
    border:1px solid black;
    width: 790px;
    line-height: 35px;
    background-color: #bebebe;
    margin-top: 5px;
    text-align: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    
}
.Meia{
    border:1px solid black;
    width: 395px;
    height: 35px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    align-content: center;
    line-height: 35px;
    font-weight: bold; 
    text-align: center;
}
.InteiraReal{
    border:1px solid black;
    width: 870px;
    height: 35px;
    text-align: center;
    font-size: 16px;
    background-color: #bebebe;
    line-height: 35px;
    font-weight: bold;
}
.MeiaBaixo{
    border:1px solid black;
    width: 435px;
    height: 35px;
    font-size: 12px;
    
}
.Envolve{
    border:1px solid black;
    width: 870px;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
}
.Dentro1{
    border:1px solid black;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex: 1;
    
}
.Dentro2{
    border:1px solid black;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex: 2;
}
.Dentro3{
    border:1px solid black;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex: 3;
}
.InteiraDentro{
    border:1px solid black;
    width: 870px;
    height: 35px;
    font-size: 12px;
    display: flex;
    
}
.Historico{
    border:1px solid black;
    width: 870px;
    height: 200px;
    font-size: 12px;
}
.ObjetosRecolhidos{
    border:1px solid black;
    width: 870px;
    height: 100px;
    font-size: 12px;
}
.InteiraReal2{
    border:1px solid black;
    width: 870px;
    height: 60px;
    text-align: center;
    font-size: 16px;
    background-color: #bebebe;
    line-height: 30px;
    font-weight: bold;
}
.InteiraDentro2{
    border:1px solid black;
    width: 870px;
    height: 45px;
    font-size: 12px;
    display: flex;
    
}
</style>

<body>
    
    <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia"> BOLETIM DE OCORRÊNCIA </div>
            <div class="Meia"> AUTENTICAÇÃO -SDFGHJKLPOIUYTREWQA </div>
            
        </div>
    
    </div>

    </div>

    <div class=ContainerCima>
        <div class="MeiaBaixo">Unidade responsável pelo registro<br/>CIA BRASILEIRA DE TRENS URBANOS</div>
        <div class="MeiaBaixo">Endereço<br/>RUA JANUÁRIA 181-BAIRRO FLORESTA-BELO HORIZONTE</div>
    </div>

    <div class="InteiraReal">DADOS DA OCORRÊNCIA</div>
    
    <div class="Envolve">

        <div class="Dentro2">Provável descrição da ocorrência principal <br/>${qqcoisa} </div>

        <div class="Dentro1">Tentado/Consumado <br/>${qqcoisa}</div>

        <div class="Dentro1">Alvo do evento  <br/>${qqcoisa}</div>

    </div>

    <div class="Envolve">

        
        <div class="Dentro1">Data do Fato<br/>${qqcoisa}</div>

        <div class="Dentro1">Horario do Fato<br/>${qqcoisa}</div>

         <div class="Dentro1">Data Final<br/>${qqcoisa}</div>

        <div class="Dentro1">Horario Final<br/>${qqcoisa}</div>

    </div>

    <div class="Envolve">

        
        <div class="Dentro3">Local<br/>Tentado</div>

        <div class="Dentro1">Município<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>


    </div>

     <div class="Envolve">

        
        <div class="Dentro1">Número<br/>Tentado</div>

        <div class="Dentro2">Complemento<br/>Bolsa</div>

         <div class="Dentro2">Bairro<br/>Tentado</div>

         <div class="Dentro1">Cep<br/>Tentado</div>


    </div>

    <div class="InteiraReal">QUALIFICAÇÃO DOS ENVOLVIDOS</div>
    <div class="InteiraReal">ENVOLVIDO 1</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>Tentado</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>Bolsa</div>

         <div class="Dentro1">Data de Nascimento<br/>Tentado</div>

         <div class="Dentro1">Naturalidade<br/>Tentado</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>Tentado</div>

        <div class="Dentro1">Estado Civil<br/>Bolsa</div>

         <div class="Dentro1">Nacionalidade<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>Tentado</div>

        <div class="Dentro1">Ocupação Atual<br/>Bolsa</div>

         <div class="Dentro1">Grau de Escolaridade<br/>Tentado</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>Tentado</div>
    <div class="InteiraDentro" >Pai<br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>Tentado</div>

        <div class="Dentro1">Orgão Epedidor<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
         <div class="Dentro1">CPF<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>Tentado</div>

        <div class="Dentro1">Número<br/>Bolsa</div>

         <div class="Dentro1">Complemento<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>Tentado</div>

        <div class="Dentro2">Município<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>Tentado</div>

        <div class="Dentro1">CEP<br/>Bolsa</div>

         <div class="Dentro1">Telefone<br/>Tentado</div>
         
    </div>

    <div class="InteiraReal">ENVOLVIDO 2</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>Tentado</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>Bolsa</div>

         <div class="Dentro1">Data de Nascimento<br/>Tentado</div>

         <div class="Dentro1">Naturalidade<br/>Tentado</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>Tentado</div>

        <div class="Dentro1">Estado Civil<br/>Bolsa</div>

         <div class="Dentro1">Nacionalidade<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>Tentado</div>

        <div class="Dentro1">Ocupação Atual<br/>Bolsa</div>

         <div class="Dentro1">Grau de Escolaridade<br/>Tentado</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>Tentado</div>
    <div class="InteiraDentro" >Pai<br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>Tentado</div>

        <div class="Dentro1">Orgão Epedidor<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
         <div class="Dentro1">CPF<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>Tentado</div>

        <div class="Dentro1">Número<br/>Bolsa</div>

         <div class="Dentro1">Complemento<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>Tentado</div>

        <div class="Dentro2">Município<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>Tentado</div>

        <div class="Dentro1">CEP<br/>Bolsa</div>

         <div class="Dentro1">Telefone<br/>Tentado</div>
         
    </div>

    <div style="height: 55px;"></div>

    <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia"> BOLETIM DE OCORRÊNCIA </div>
            <div class="Meia"> AUTENTICAÇÃO -SDFGHJKLPOIUYTREWQA </div>
            
        </div>
    
    </div>

    </div>

    <div class="InteiraReal">ENVOLVIDO 3</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>Tentado</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>Bolsa</div>

         <div class="Dentro1">Data de Nascimento<br/>Tentado</div>

         <div class="Dentro1">Naturalidade<br/>Tentado</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>Tentado</div>

        <div class="Dentro1">Estado Civil<br/>Bolsa</div>

         <div class="Dentro1">Nacionalidade<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>Tentado</div>

        <div class="Dentro1">Ocupação Atual<br/>Bolsa</div>

         <div class="Dentro1">Grau de Escolaridade<br/>Tentado</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>Tentado</div>
    <div class="InteiraDentro" >Pai<br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>Tentado</div>

        <div class="Dentro1">Orgão Epedidor<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
         <div class="Dentro1">CPF<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>Tentado</div>

        <div class="Dentro1">Número<br/>Bolsa</div>

         <div class="Dentro1">Complemento<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>Tentado</div>

        <div class="Dentro2">Município<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>Tentado</div>

        <div class="Dentro1">CEP<br/>Bolsa</div>

         <div class="Dentro1">Telefone<br/>Tentado</div>
         
    </div>

    <div class="InteiraReal">ENVOLVIDO 4</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>Tentado</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>Bolsa</div>

         <div class="Dentro1">Data de Nascimento<br/>Tentado</div>

         <div class="Dentro1">Naturalidade<br/>Tentado</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>Tentado</div>

        <div class="Dentro1">Estado Civil<br/>Bolsa</div>

         <div class="Dentro1">Nacionalidade<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>Tentado</div>

        <div class="Dentro1">Ocupação Atual<br/>Bolsa</div>

         <div class="Dentro1">Grau de Escolaridade<br/>Tentado</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>Tentado</div>
    <div class="InteiraDentro" >Pai<br/>Tentado</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>Tentado</div>

        <div class="Dentro1">Orgão Epedidor<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
         <div class="Dentro1">CPF<br/>Tentado</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>Tentado</div>

        <div class="Dentro1">Número<br/>Bolsa</div>

         <div class="Dentro1">Complemento<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>Tentado</div>

        <div class="Dentro2">Município<br/>Bolsa</div>

         <div class="Dentro1">UF<br/>Tentado</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>Tentado</div>

        <div class="Dentro1">CEP<br/>Bolsa</div>

         <div class="Dentro1">Telefone<br/>Tentado</div>
         
    </div>

    <div class="InteiraReal">HISTÓRICO</div>

    <div class="Historico" ></div>

     <div style="height: 75px;"></div>

    <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia"> BOLETIM DE OCORRÊNCIA </div>
            <div class="Meia"> AUTENTICAÇÃO -SDFGHJKLPOIUYTREWQA </div>
            
        </div>
    
    </div>

    </div>

    <div class="InteiraReal">OBJETOS RECOLHIDOS</div>

    <div class="ObjetosRecolhidos"></div>

    <div class="InteiraReal">RESPONSÁVEL PELA APREENSÃO/PRISÃO/CONDUÇÃO</div>

     <div class="Envolve">
        
        <div class="Dentro1">Matrícula<br/>Tentado</div>

        <div class="Dentro1">Siape<br/>Bolsa</div>

         <div class="Dentro1">Cargo<br/>Tentado</div>
         
    </div>

    <div class="InteiraDentro">Nome Completo<br/>Tentado</div>

    <div class="InteiraReal">RELATOR DA OCORRÊNCIA</div>

     <div class="Envolve">
        
        <div class="Dentro1">Matrícula<br/>Tentado</div>

        <div class="Dentro1">Siape<br/>Bolsa</div>

         <div class="Dentro1">Cargo<br/>Tentado</div>
         
    </div>

    <div class="InteiraDentro">Nome Completo<br/>Tentado</div>

     <div class="InteiraReal">AGENTE INTEGRANTE</div>

     <div class="Envolve">
        
        <div class="Dentro1">Matrícula<br/>Tentado</div>

        <div class="Dentro1">Siape<br/>Bolsa</div>

         <div class="Dentro1">Cargo<br/>Tentado</div>
         
    </div>

    <div class="InteiraDentro">Nome Completo<br/>Tentado</div>

    <div style="height: 30px;"></div>

    <div class="InteiraReal2">RECIBO DA AUTORIDADE A QUE SE DESTINA OU SEU AGENTE/AUXILIAR POLICIAL OU RECIBO DO RESPONSÁVEL CIVIL</div>
    
    <div class="InteiraReal">DESTINATÁRIO/RECIBO 1</div>

    <div class="InteiraDentro2">RECEBI O "ATENDIMENTO AO USUÁRIO" DE AUTENTICAÇÃO -MOCjNAAR_89FlAAKzVI PARA CONHECIMENTO E PROVIDÊNCIAS, BEM COMO AS PESSOAS,
    MATERIAIS, OBJETOS , ANIMAIS, SUBSTÂNCIAS E/ OU DOCUMENTOS QUE, EXISTINDO, ESTEJAM DESCRITOS OU ASSINALADOS NESTE DOCUMENTO.
    
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Data</div>

        <div class="Dentro1">Hora</div>

         <div class="Dentro1">Matrícula</div>
         
         <div class="Dentro3">Nome</div>
         
    </div>

    <div class="InteiraDentro">Cargo</div>
    <div class="InteiraDentro">Orgão/UF</div>
    <div class="InteiraDentro">Unidade</div>
    <div class="InteiraDentro">Providência a ser tomada pela autoridade</div>
    <div class="InteiraDentro">Assinatura</div>

    <div class="Envolve">
        
        <div class="Dentro1">Recibo gerado por</div>

        <div class="Dentro1">Data de criação do recibo</div>
         
    </div>

    <div style="height: 210px;"></div>

     <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia"> BOLETIM DE OCORRÊNCIA </div>
            <div class="Meia"> AUTENTICAÇÃO -SDFGHJKLPOIUYTREWQA </div>
            
        </div>
    
    </div>

    </div>

    <div class="InteiraReal">CARACTERÍSTICAS QUE EVIDENCIAM A POSSIBILIDADE DE FALSIFICAÇÃO</div>

    <div class="Envolve">
        
        <div class="Dentro1">Marca D'água</div>

        <div class="Dentro1">Microimpressões</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Registro Coincidente</div>

        <div class="Dentro1">Imagem Latente</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Impressão em Alto Relevo</div>

        <div class="Dentro1">Numeração</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Fibras Coloridas</div>

        <div class="Dentro1">Marca Tátil</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Fio de Segurança</div>

        <div class="Dentro1">Fundos Especiais</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Fibras Sensíveis a Ultravioleta</div>

        <div class="Dentro1">Faixa Holográfica</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Tipo e/ou Tamanho do Papel</div>

        <div class="Dentro1">Janela Transparente</div>
         
    </div>

    <div class="InteiraDentro">Moeda</div>
    <div class="InteiraDentro">Outros</div>

    <div class="InteiraReal">Informações Prestadas pelo Envolvido</div>

    <div class="Envolve">
        
        <div class="Dentro1">Origem da Cédula</div>

        <div class="Dentro1">Estado de Animo do Usuário</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Tentou Evadir do Local</div>

        <div class="Dentro1">Possuía Outras Cédulas Válidas</div>

        <div class="Dentro1">Pagou Após o Fato</div>
         
    </div>

    </body>

    </html>
`;



const page1 = PDFPage
  .create()
  .setMediaBox(200, 200)
  .drawText('You can add text and rectangles to the PDF!', {
    x: 5,
    y: 235,
    color: '#007386',
  })
  .drawRectangle({
    x: 25,
    y: 25,
    width: 150,
    height: 150,
    color: '#FF99CC',
  })
  .drawRectangle({
    x: 75,
    y: 75,
    width: 50,
    height: 50,
    color: '#99FFCC',
  });

const createAndSavePDF = async (html) => {
  try {
    const { uri } = await Print.printToFileAsync({ html });
    
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        await MediaLibrary.createAssetAsync(uri);
        alert('pdf baixado');
      }
    
  } catch (error) {
    console.error(error);
  }
};

const createPDF = async (html) => {
    try {
        const { uri } = await Print.printToFileAsync( {html} );
        return uri;
    } catch (err) {
        console.error(err);
    }
};

const aff = () => {
  alert('sssssss')
}

const createPDF2 = async () => {
    
    let options = {
      // HTML Content for PDF.
      // I am putting all the HTML code in Single line but if you want to use large HTML code then you can use + Symbol to add them.
      html:
        '<h1 style="text-align: center;"><strong>Welcome Guys</strong></h1><p style="text-align: center;">In This Tutorial we would learn about creating PDF File using HTML Text.</p><p style="text-align: center;"><strong>ReactNativeCode.com</strong></p>',
      // Setting UP File Name for PDF File.
      fileName: 'test',

      //File directory in which the PDF File Will Store.
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(count);

    console.log(file.filePath);

    Alert.alert(file.filePath);

    setCount({filePath:file.filePath});
  
        
    };
 



 const createPdf3 = () => {
   Print.printToFileAsync( {htmlContent} );
   console.log(element)
 }


return(
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Button title='pdf' onPress={() => createAndSavePDF(htmlContent1)} />
        <Text>{count.html} olha isso</Text> 
        <Image source={require('./assets/brasaoTransarente.png')} style={{width:50,height:50}} />
      </View>
  )
}