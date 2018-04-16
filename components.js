const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

module.exports = getComponents();

function getComponents(dir = './components/bootstrap', data = {}) {
  fs.readdirSync(dir).forEach(source => {
    const sourcePath = path.join(dir, source);
    if (fs.lstatSync(sourcePath).isDirectory()) {
      return getComponents(sourcePath, data);
    }
    const content = cheerio.load(fs.readFileSync(sourcePath, 'utf8'));
    const name = content('name').text();
    content('name').remove();
    data[source.replace('.vue', '')] = {
      name: name,
      code: content('head').html().replace(/=""/g, ''),
    }
  });
  return data;
}

