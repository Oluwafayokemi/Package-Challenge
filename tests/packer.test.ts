import { Packer } from '../src/packer'

describe('Packer page', () => {
  describe('Error', () => {
    it('should throw invalid file error for a file with incorrect input', async () => {
      const data = await Packer.pack('resources/example_output')
      expect(data.message).toBe('invalid data')
      expect(data.statusCode).toBe(400)
    })
  })

  describe('success', () => {
    it('should return correct output when it has one single array', async () => {
      const data = await Packer.pack('resources/example_input')
      const output = '4\r\n_\r\n2,7\r\n8,9'
      expect(data).toBe(output)
    })

    it('should return correct output when it has two single arrays', async () => {
      const data = await Packer.pack(
        'resources/example_input_with_2SingleArrays'
      )
      const output = '4\r\n_\r\n1\r\n2,7\r\n8,9'
      expect(data).toBe(output)
    })

    it('should return correct output when one of the weight is over 100', async () => {
      const data = await Packer.pack(
        'resources/example_input_with_overWeightPackage'
      )
      const output = '4\r\n_\r\n_\r\n8,9'
      expect(data).toBe(output)
    })

    it('should return correct output when one of the cost is over 100', async () => {
      const data = await Packer.pack(
        'resources/example_input_with_overCostPackage'
      )
      const output = '5,6\r\n_\r\n2,7\r\n8,9'
      expect(data).toBe(output)
    })


  })
})
