import scrapy

class Company(scrapy.Spider):
    name = "wine"
    allowed_domain = ['vietywine.com']
    start_urls = ['https://vnr500.com.vn/Charts/Index?chartId=1']

    # Hàm duyệt qua từng url của từng company
    def parse(self,response):
        for link in response.css('span.name_1 a::attr(href)'):
            yield response.follow(link.get(),callback = self.parse_link)


    def parse_link(self,response):
        name_company = response.css('.more_info h2.home-title span::text').get()
        tax_code = response.css('tr:nth-child(2) td:nth-of-type(2)::text').get() 
        location = response.css('tr:nth-child(4) td:nth-of-type(2)::text').get()
        tel = response.css('tr:nth-child(5) td:nth-of-type(2)::text').get()
        tax = response.css('tr:nth-child(6) td:nth-of-type(2)::text').get()
        email = response.css('tr:nth-child(7) td:nth-of-type(2)::text').get()
        website = response.css('tr:nth-child(8) td:nth-of-type(2)::text').get()
        founded_year = response.css('tr:nth-child(9) td:nth-of-type(2)::text').get()
        desc = response.css('p[style="text-align: justify;"]::text').get() 
        yield {
            "name_company": name_company,
            "tax_code": tax_code,
            "location": location,
            "tel": tel,
            "tax": tax,
            "email": email,
            "website": website,
            "founded_year": founded_year,
            "desc": desc
        } 