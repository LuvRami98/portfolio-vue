<template>
    <div class="main-container">
      <div class="section-box">
        <h2>Mitt tidigare arbete:</h2>

        <div>
        <h3>Business Risk Officer, Danske Bank AB</h3>
        <p>På Danske Bank arbetade jag som riskanalytiker med operativ risk. Mina ansvarsområden var risker relaterat till processer, icke-finansiell risk och strategi.
        Jag har utvecklat och implementerat riskmodeller med verktyg som Excel, Tableau och interna banksystem. 
        Projektöversikt och systemintegration med Jira och Confluence har varit centrala delar av mitt arbete, där jag också samordnat produkthantering och riskstrategi. Jobbet innefattade rapportering, projektöversikt och samarbete gällande riskmodeller.</p>
        </div>

        <div>
        <h3>Riskanalytiker, Volkswagen Finans AB</h3>
        <p>I min roll som riskanalytiker på Volkswagen Finans AB har jag arbetat med avancerad dataanalys och prognostisering för att hantera restvärdesrisk. 
          Jag har varit ansvarig för att utveckla och implementera riskmodeller samt för rapportering av nyckeltal och portföljvärdering. 
          Arbetet har innefattat omfattande användning av tekniska verktyg som Jira för projektöversikt och planering. 
          Jag har samarbetat nära med IT-avdelningen för att utveckla tekniska lösningar och integrera dessa i riskhanteringsprocesserna.</p>
        </div>

      <div>
        <h3>Konsult, Forensic & Integrity, Ernst & Young Sweden AB</h3>
        <p>Under min tid på Ernst & Young har jag arbetat med komplexa tekniska utredningar inom compliance och riskanalys. 
          Jag har använt datadrivna metoder för att analysera och identifiera ekonomiska oegentligheter samt för att utveckla förebyggande riskstrategier. 
          Mina uppdrag krävde avancerad kostnadsanalys och arbete med bokföringssystem, 
          vilket stärkte min förmåga att hantera stora datamängder och utveckla tekniska lösningar för ekonomisk analys.</p>
      </div>

        <div>
        <h3>AML-analytiker, Swedbank AB</h3>
        <p>Som AML-analytiker på Swedbank har jag använt avancerad datahantering och transaktionsmonitorering för att identifiera och analysera risker kopplade till penningtvätt och terrorfinansiering. 
          Jag har implementerat och upprätthållit bankens policy och regelverk genom att använda tekniska plattformar för compliance-frågor och due diligence. 
          Min erfarenhet innefattar arbete med datasystem för att analysera stora transaktionsvolymer och säkerställa efterlevnad av regelverk.</p>
        </div>
  
      <div class="section-box return-container">
        <p><router-link to="/about3">Återvänd till föregående sida</router-link></p>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'PreviousWorkView',
  };
  </script>
  
  <style scoped>
  .main-container {
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-box {
    background-color: #f9f9f9;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 20px;
    text-align: left;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  