import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('/Packer', () => {
  describe('Error', () => {
    it('it should throw invalid file error for a file with incorrect input', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=resources/example_output')
        .end((err, res: any) => {

          expect(res.body.statusCode).to.equal(400)
          expect(res.body.message).to.equal('invalid data')
          done()
        })
    })
  })

  describe('success', () => {
    it('should return correct output when it has one single array', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=resources/example_input')
        .end((err, res: any) => {
          const output = '4\r\n\r\n2,7\r\n8,9'

          expect(res.status).to.equal(200)
          expect(res.body).to.equal(output)
          done()
        })
    })

    it('should return correct output when it has two single arrays', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=resources/example_input_with_2SingleArrays')
        .end((err, res: any) => {
          const output = '4\r\n\r\n1\r\n2,7\r\n8,9'

          expect(res.status).to.equal(200)
          expect(res.body).to.equal(output)
          done()
        })
    })

    it('should return correct output when one of the weight is over 100', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=resources/example_input_with_overWeightPackage')
        .end((err, res: any) => {
          const output = '4\r\n\r\n\r\n\r\n8,9'

          expect(res.status).to.equal(200)
          expect(res.body).to.equal(output)
          done()
        })
    })

    it('should return correct output when one of the cost is over 100', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=resources/example_input_with_overCostPackage')
        .end((err, res: any) => {
          const output = '6\r\n\r\n2,7\r\n8,9'

          expect(res.status).to.equal(200)
          expect(res.body).to.equal(output)
          done()
        })
    })
  })
})
