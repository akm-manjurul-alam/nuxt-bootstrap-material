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
    data[source.replace('.vue', '')] = {
      name: content('name').text(),
      code: cheerio.html(content('template')).replace(/=""/g, '') + (content('style') ? "\n\n" + cheerio.html(content('style')) : ''),
    }
  });

  return data;
}

