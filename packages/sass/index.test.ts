import css, { sass, scss } from '.'

describe('sass', () => {
  test('default scss support', () => {
    expect(css`
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
`).toMatchInlineSnapshot()
  })

  test('scss support', () => {
    let css = scss()
    expect(css`
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
`).toMatchInlineSnapshot()
  })

  test('sass scss support', () => {
    let css = sass()
    expect(css`
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none


`).toMatchInlineSnapshot()
  })
})
