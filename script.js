// Chave PIX (seu identificador PIX, pode ser um CPF, CNPJ, e-mail ou chave aleatória)
const chavePIX = "62982289666";

// Valor e descrição do pagamento
const valor = 50.00; // Altere para o valor do pagamento
const descricao = "Pagamento PIX"; // Altere para uma descrição adequada

// Monta o payload para o QR Code PIX
const payload = {
    "pixKey": chavePIX,
    "amount": {
        "currency": "BRL",
        "value": valor.toFixed(1)
    },
    "endToEndId": "E2E-" + Math.random().toString(36).substr(2, 10), // Identificador único para a transação
    "merchantName": "Nome do beneficiário",
    "merchantCity": "Cidade do beneficiário",
    "description": descricao
};

// Gera o código QR
const qrCodeDiv = document.getElementById('qrcode');
const qr = new QRCode(qrCodeDiv, {
    text: JSON.stringify(payload),
    width: 200,
    height: 200
});
