const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Création des intervenants
  const intervenant1 = await prisma.intervenant.create({
    data: {
      name: "Dr. Marie Dubois",
      bio: "Docteur en mathématiques avec 10 ans d'expérience",
      email: "marie.dubois@universite.fr",
      specialty: "MATH",
      phone: "0612345678",
    },
  });

  const intervenant2 = await prisma.intervenant.create({
    data: {
      name: "Prof. Thomas Martin",
      bio: "Professeur en informatique, spécialisé en génie logiciel",
      email: "thomas.martin@universite.fr",
      specialty: "COMPUTER_SCIENCE",
      phone: "0687654321",
    },
  });

  // Création des cours
  await prisma.course.createMany({
    data: [
      {
        name: "Algèbre linéaire",
        description: "Fondamentaux de l'algèbre linéaire",
        code: "MATH101",
        creditUnit: 6,
        hours: 60,
        semester: "Y2024_2025",
        intervenantId: intervenant1.id,
      },
      {
        name: "Programmation orientée objet",
        description: "Introduction aux concepts de la POO",
        code: "CS201",
        creditUnit: 4,
        hours: 45,
        semester: "Y2024_2025",
        intervenantId: intervenant2.id,
      },
      {
        name: "Analyse numérique",
        description: "Méthodes numériques avancées",
        code: "MATH202",
        creditUnit: 5,
        hours: 50,
        semester: "Y2024_2025",
        intervenantId: intervenant1.id,
      },
    ],
  });

  console.log("Base de données alimentée avec succès !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });