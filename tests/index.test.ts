import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('/Index', () => {
  it('returns the home page', done => {
    chai
      .request('http://localhost:8080')
      .get('/')
      .end((err, res: any) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.equal('Hello world!')
        done()
      })
  })

  describe('Error', () => {
    it('When no value is passed to req.query should throw an error', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer')
        .end((err, res: any) => {
          expect(res.body.statusCode).to.equal(400)
          expect(res.body.message).to.equal('Please provide a valid file')
          done()
        })
    })

    it('When no value is passed to req.query.filePath should throw an error', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=')
        .end((err, res: any) => {
          expect(res.body.statusCode).to.equal(400)
          expect(res.body.message).to.equal('Please provide a valid file')
          done()
        })
    })

    it('When an empty string is passed to req.query.filePath should throw an error', done => {
      chai
        .request('http://localhost:8080')
        .get('/packer?filePath=invalid_path')
        .end((err, res: any) => {
          expect(res.body.statusCode).to.equal(400)
          expect(res.body.message).to.equal('Please provide a valid file')
          done()
        })
    })
  })
})
