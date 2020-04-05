const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "https://cnet2.cbsistatic.com/img/e0oF8FTfBwW_9gzMgIdZmNZydDI=/940x0/2020/04/02/45698515-984b-4c4d-8a70-9fdc63386db8/winter-magazine-coffee-shoot-23.jpg" },
  { name: "Voluptatem", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG" },
  { name: "Explicabo", image: "https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg" },
  { name: "Rchitecto", image: "https://blog.warriorcoffee.com/hubfs/_MG_3386.jpg" },
  { name: " Beatae", image: "https://specials-images.forbesimg.com/imageserve/1152308114/960x0.jpg?fit=scale" },
  { name: " Vitae", image: "https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202018/Health/June/CR-Health-Inlinehero-Health-Does-Espresso-or-Coffee-Have-More-Caffeine-11-16" },
  { name: "Inventore", image: "https://media.distractify.com/brand-img/zV1CK5HV_/0x0/dalgona-coffee-1584724125060.png" },
  { name: "Veritatis", image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/321784_2200-732x549.jpg" },
  { name: "Accusantium", image: "https://www.incimages.com/uploaded_files/image/970x450/getty_938993594_391384.jpg" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)