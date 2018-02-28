function sum(a,b) {
  return a + b;
}

// name export
// ter vários exports dentro de um
// msm arquivo
// só pode chamar com o msm nome
// import precisa das chaves
export function sub(a, b) {
  return a - b;
}

export const PI = 3.14

// método principal
// só pode ter um default por arquivo
// importar com qq nome
// não precisa utilizar as chaves
export default sum;
