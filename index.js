module.exports = function vimwikitag_plugin(md, options) {
	options = options || {}
	const VIMWIKITAG_RE = options.VIMWIKITAG_RE || /(:[a-z]+[a-z0-9/_\-]*):/gi
	function vimwikitag(state, silent) {
		var token,
			pos = state.pos,
			max = state.posMax,
			matches
		matches = state.src.slice(pos).match(VIMWIKITAG_RE)
		if (matches) {
			state.pos += matches[0].length
			if (!silent) {
				const tag = matches[0].substr(1, matches[0].length - 2)
				token = state.push('vimwikitag_open', 'a', 1)
				token.attrs = [['class', 'vimwikitag'],['href', `/search?q=${tag}`]]
				token = state.push('text', '', 0)
				token.content = tag
				token = state.push('vimwikitag_close', 'a', -1)
			}
			return true
		}
		return false
	}

	md.inline.ruler.after('entity', 'vimwikitag', vimwikitag)
}
