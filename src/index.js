import $ from 'https://unpkg.com/umbrellajs/umbrella.esm.js'
import jsYaml from 'https://unpkg.com/js-yaml?module'
const DEFAULT_URL = `${window.location.protocol}//${window.location.host}`
fetch('./data.yml').then(res => res.text()).then(jsYaml.load)
  .then(object => {
    const list = Object(object).repository || []
    $('#app').html(`
      <div>
        <h1>Hello</h1>
      </div>
      <div>
        ${list.map(({ id, url = `${DEFAULT_URL}/${id}`, description = '' }) => `<div><a href="${url}">${id}</a><p>${description}</p></div>`).join('')}
      </div>
    `)
  })

