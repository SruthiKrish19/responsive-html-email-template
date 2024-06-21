function responsiveHtmlTemplate() {
  const html = HtmlService.createTemplateFromFile("template").evaluate().getContent()
  GmailApp.createDraft("","Responsive HTML Template","",{htmlBody:html})
}
