import { test } from '@playwright/test';
import * as assert from 'assert';

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "your host",
  port: 465,
  secure: true,
  auth: {
    user: 'your email',
    pass: `héhéhé`
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.planity.com/la-belle-boucle-studio-lyon-69001');
  await page.getByLabel('Refuser: Refuser notre traitement des données et fermer').click();
  await page.getByRole('button', { name: 'Choisir' }).click();

  // const text = page.getByText('Il n\'y a pas de dispon,k,ibilité en ligne pour ce choix.').first();
  const locatorText = page.locator('.step-module_tablet-dgv0A').first();
  await locatorText.isEnabled()
  const isVisible = await page.getByText('Il n\'y a pas de disponibilité en ligne pour ce choix.').first().isVisible();
  if (!isVisible) {
    // Me prévenir
    await prevenirNirina()
  } else {
    // Ne rien faire
    assert.fail('Il n\'y a pas de disponibilités')
  }
});

async function prevenirNirina() {
  await transporter.sendMail({
    from: '"Mamène" <your email provider>', // sender address
    to: "your email", // list of receivers
    subject: "Rendez-vous la belle boucle disponible", // Subject line
    text: "Voir https://www.planity.com/la-belle-boucle-studio-lyon-69001", // plain text body
  });
}