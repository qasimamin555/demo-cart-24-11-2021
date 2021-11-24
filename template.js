export default ({markup,css}) => {
    return `<!Doctype html>
    <html lang='en'>
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset='utf-8'>
            <title>MERN Kickstart</title>
        </head>
        <body>
            <div id='root'>${markup}</div>
            <style>${css}</style>
            <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
    </html>`
}