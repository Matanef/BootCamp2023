    const data = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nIssue: ${issue}\n\n`;
    
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url
    a.download = 'information.txt';
    a.click();

//OR this:


    function download(text, filename){
        var blob = new Blob([text], {type: "text/plain"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      }
      
      download("this is the file", "text.txt");