import dep0 from './dep0.viewer'

const load = json => {
  console.log(json)
  JSON.parse(json).deps.forEach(function(dep, index) {
    System.import('./' + dep + '.viewer').then(function() {
      console.log('module loaded.')
    })
  })
}

const req = new XMLHttpRequest()
req.addEventListener("load", load)
req.open("GET", "./deps.json")
req.send()
