import pdfkit

caminho_exe = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
config = pdfkit.configuration(wkhtmltopdf=caminho_exe)

pdfkit.from_file('curriculo.html', 'saida.pdf', configuration=config)
