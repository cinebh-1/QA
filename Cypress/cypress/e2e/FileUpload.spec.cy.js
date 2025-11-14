describe("File Upload Demo", () => {
    it("Upload files via Cypress selectFile() method", () => {
        cy.visit("https://qa-automation-practice.netlify.app/file-upload.html");
        //grab file upload selector and pass file path 
        cy.get("#file_upload").selectFile("C:/Users/Admin/Desktop/File1.txt");
        //uploading multiple files
        //cy.get("file_upload").selectFile("C:/Users/Admin/Desktop/File1.txt", "C:/Users/Admin/Desktop/File2.txt");
        cy.wait(1200);
        //click submit button after uploading file 
        cy.get("button[type='submit']").click();
        cy.wait(1200);
    })
})