<template>
  <div class="main-container">
    <div class="one">
      <img src="@/assets/img2.jpg" alt="Här är en bild på mig" />
    </div>

    <div class="section-box">
      <h2>Om mig:</h2>
      <p> Jag har en examen i nationalekonomi och erfarenhet inom riskanalys. 
        Under min karriär har jag utvecklat en stark teknisk kompetens genom att kombinera min passion för dataanalys och problemlösning med min vilja att lära mig nya teknologier. 
        Jag skrev min kandidatuppsats om statsskuld, vilket förstärkte mitt intresse för att analysera komplexa problem och presentera effektiva lösningar.
        </p>
        <p>
        Genom mina tidigare roller har jag fått omfattande erfarenhet av att arbeta med riskanalys för både kunder och företag. 
        Jag är certifierad i SQL och har arbetat mycket med Excel (inklusive VBA, makron, filter och pivot-tabeller), 
        vilket har gett mig en djup förståelse för databashantering och automatisering. </p>
        <p>
        Dessutom har jag arbetat med plattformar som SharePoint, Qlik Sense, och Visma, vilket har stärkt min förmåga att hantera och visualisera data effektivt.
        Jag har även erfarenhet av Jira och Confluence för projektarbete, samt Tableau och Power BI för datavisualisering. </p>
        <p>
        Med min utbildning i fullstackutveckling vill jag fortsätta bygga på min tekniska kompetens. 
        Jag ser fram emot att arbeta med komplexa system och bidra till utvecklingen av moderna och effektiva lösningar. </p>
    </div>

    <div class="resume-link">
      <p>
        <a href="/CV-IT, Harald von Heijne.pdf" target="_blank">Öppna mitt CV (PDF)</a>
      </p>
    </div>

    <div class="section-box return-container">
      <p><router-link to="/about3">Återvänd till föregående sida</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
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

.one img {
  display: block;
  margin: 0 auto;
  max-width: 150px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #ccc;
}

.resume-link {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
