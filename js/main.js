var websites = []
if (localStorage.getItem('website')) {
    websites = JSON.parse(localStorage.getItem('website'))
}
display()


function add() {
    let sitename = document.getElementById('siteName').value;
    let siteurl = document.getElementById('SiteURL').value;
    let website = {
        Name: sitename,
        link: siteurl
    }
    if (validateLink(siteurl) && validateName(sitename)) {
        document.getElementById('validate').innerHTML = ''

        websites.push(website)
        localStorage.setItem('website', JSON.stringify(websites))
        display()
        document.getElementById('siteName').value = ''
        document.getElementById('SiteURL').value = ''
    }
    else {
        document.getElementById('validate').innerHTML = 'not valid'
    }


}

function del(i) {
    websites.splice(i, 1)
    localStorage.setItem('website', JSON.stringify(websites))
    display()
}


function display() {
    let cartona = '';
    for (let i = 0; i < websites.length; i++) {
        cartona += `
        <tr>
            <td>${i + 1}</td>
            <td> ${websites[i].Name} </td>
            <td>
                <a class="btn btn-success visit" href="  ${websites[i].link} " target="_blank" > <i class="fa-solid fa-eye"></i>
                    visit</a>
            </td>
            <td>
                <div class="btn btn-danger del" onclick="del( ${i} )"> <i class="fa-solid fa-trash-can"></i> delete
                </div>
            </td>
        </tr>
`
    }
    document.getElementById('websites').innerHTML = cartona
}


const websiteNameRegex = /[1-9A-Za-z]{2,30}/
const websiteLinkRegex = /(?:http[s]?:\/\/.)?(?:www\.)[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/

function validateLink(link) {
    return websiteLinkRegex.test(link)
}

function validateName(name) {
    return websiteNameRegex.test(name)
}