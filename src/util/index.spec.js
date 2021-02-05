import * as util from "./"

describe("util", () => {
  describe("isEmpty", () => {
    it("returns true when given an undefined value", () => {
      expect(util.isEmpty(undefined)).toBe(true)
    })

    it("returns true when given a null value", () => {
      expect(util.isEmpty(null)).toBe(true)
    })

    it("returns true when given an empty string", () => {
      expect(util.isEmpty("")).toBe(true)
    })

    it("returns false when given a string", () => {
      expect(util.isEmpty("a")).toBe(false)
    })

    it("returns true when passed an empty array", () => {
      expect(util.isEmpty([])).toBe(true)
    })

    it("returns false when passed an non-empty array", () => {
      expect(util.isEmpty(["a"])).toBe(false)
    })
  })

  describe("isNotEmpty", () => {
    it("returns false when given an undefined value", () => {
      expect(util.isNotEmpty(undefined)).toBe(false)
    })

    it("returns false when given a null value", () => {
      expect(util.isNotEmpty(null)).toBe(false)
    })

    it("returns false when given an empty string", () => {
      expect(util.isNotEmpty("")).toBe(false)
    })

    it("returns true when given a string", () => {
      expect(util.isNotEmpty("a")).toBe(true)
    })

    it("returns false when passed an empty array", () => {
      expect(util.isNotEmpty([])).toBe(false)
    })

    it("returns true when passed an non-empty array", () => {
      expect(util.isNotEmpty(["a"])).toBe(true)
    })
  })

  describe("withWindow", () => {
    describe("when `window` is present", () => {
      it("runs the given function", () => {
        const fn = jest.fn()

        util.withWindow(fn)

        expect(fn).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("withDocument", () => {
    it("runs the given function", () => {
      const createElementSpy = jest.spyOn(window.document, "createElement")
      const fn = jest.fn(d => d.createElement("div"))

      util.withDocument(fn)

      expect(fn).toHaveBeenCalledTimes(1)
      expect(createElementSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe("withNavigator", () => {
    it("runs the given function", () => {
      const fn = jest.fn(n => n.language)

      util.withNavigator(fn)

      expect(fn).toHaveBeenCalledTimes(1)
    })
  })

  describe("writeToClipboard", () => {
    it("writes the given content to the clipboard", async () => {
      expect.assertions(2)
      window.navigator.clipboard = {
        writeText: jest.fn()
      }

      await util.writeToClipboard("test")

      expect(window.navigator.clipboard.writeText).toHaveBeenCalledTimes(1)
      expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith("test")
    })
  })
})
