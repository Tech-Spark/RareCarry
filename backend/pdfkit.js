import fs from 'fs'; 
import PDFDocument from 'pdfkit';

export const createInvoice = function(invoice, path) {
    let doc = new PDFDocument({margin: 50});
    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);
    doc.end();
    doc.pipe(fs.createWriteStream(path));
};

function generateHeader(doc) {
    doc
      .image("backend/logoMain.png", 50, 45, { width: 50 })
      .fillColor("#444444")
      .fontSize(20)
      .text("Rare>>Carry", 110, 57)
      .fontSize(10)
      .text("Rua Garcia de Orta 12-3esq", 200, 65, { align: "right" })
      .text("Aguas Livres, Amadora, Lisbon, 2027-252", 200, 80, { align: "right" })
      .moveDown();
  }
  function generateFooter(doc) {
    doc
      .fontSize(8)
      .text(
        "Thank you for shopping with us! we would love to see you soon again!",
        50,
        730,
        { align: "center", width: 500 }
      );
  }

  function generateCustomerInformation (doc, invoice) {
    const shipping = invoice.shippingAddress;
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Invoice", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoice_no, 150, customerInformationTop)
    .font("Helvetica")
    .text("Invoice Date:", 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15)
    .text("Total Paid:", 50, customerInformationTop + 30)
    .text('€' + invoice.totalPrice, 150, customerInformationTop + 30)
    
    .font("Helvetica-Bold")
    .text(shipping.fullName, 300, customerInformationTop)
    .font("Helvetica")
    .text(shipping.address, 300, customerInformationTop + 15)
    .text(
      shipping.city +
        ", " +
        shipping.postCode +
        ", " +
        shipping.country,
      300,
      customerInformationTop + 30
    )
    .moveDown();

  generateHr(doc, 252);
  }
// generate  items table
  function generateInvoiceTable(doc, invoice) {
    let i;
  const invoiceTableTop = 330;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Name",
    // "Product_Id",
    "Unit Cost",
    "Quantity",
    "Item Total"
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  for (i = 0; i < invoice.pdfItem.length; i++) {
    const item = invoice.pdfItem[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow (
      doc,
      position,
      item.name.slice(0, 26),
      // item._id,
      '€' + item.price.toFixed(2),
      item.qty,
      '€' + (item.price * item.qty).toFixed(2),
      );
    generateHr(doc, position + 20);
      }
    const subtotalPosition = invoiceTableTop + (i + 1) * 30;
    const itemsCost = invoice.itemsPrice;
    generateTableRow(
      doc,
      subtotalPosition,
      "",
      "",
      "Subtotal",
      "€" + itemsCost.toFixed(2),
    );

    const taxPosition = subtotalPosition + 20;
    const Tax = invoice.taxPrice;
    generateTableRow(
      doc,
      taxPosition,
      "",
      "",
      "Tax(15%)",
      "€" + Tax.toFixed(2),
    );
    const shippingPosition = taxPosition + 20;
    const shipping = invoice.shippingPrice;
    generateTableRow(
      doc,
      shippingPosition,
      "",
      "",
      "Shipping",
      "€" + shipping.toFixed(2),
    );
    const totalPosition = shippingPosition + 20
    const totalCost = invoice.totalPrice;
    generateTableRow(
      doc.font("Helvetica-Bold"),
      totalPosition,
      "",
      "",
      "Total = ",
      "€" + totalCost.toFixed(2),
    );
  }
  // table row 
      function generateTableRow(
        doc,
        y,
        name,
        // product_Id,
        unitCost,
        qty,
        ItemTotal
      ) {
        doc
          .fontSize(10)
          .text(name, 50, y)
          // .text(product_Id, 150, y)
          .text(unitCost, 240, y, { width: 70, align: "right" })
          .text(qty, 350, y, { width: 70, align: "right" })
          .text(ItemTotal, 0, y, {align: "right" });
      }

  // hr line function
  function generateHr(doc, y) {
    doc
      .strokeColor("#aaaaaa")
      .lineWidth(1)
      .moveTo(50, y)
      .lineTo(550, y)
      .stroke();
  }

  // format date 
  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    return year + "/" + month + "/" + day;
  }
 
  
