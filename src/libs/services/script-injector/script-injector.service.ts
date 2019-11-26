import {Injectable, Renderer2, RendererFactory2, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

interface InjectURLOptions {
	defer?: boolean;
	async?: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class ScriptInjectorService {
	private renderer2: Renderer2;

	constructor(
		rendererFactory: RendererFactory2,
		@Inject(DOCUMENT) private document
	) {
		this.renderer2 = rendererFactory.createRenderer(null, null);
	}

	/**
	 * Inject a URL into the document.
	 *
	 * @param url - URL to be injected.
	 * @param options - Options regarding the script.
	 */
	injectUrl(url: string, options: InjectURLOptions = {}) {
		const scriptTag = this.renderer2.createElement('script');

		this.renderer2.setAttribute(scriptTag, 'type', 'text/javascript');
		this.renderer2.setAttribute(scriptTag, 'src', url);

		if (options) {
			if (options.defer) {
				this.renderer2.setAttribute(scriptTag, 'defer', '');
			}

			if (options.async) {
				this.renderer2.setAttribute(scriptTag, 'async', '');
			}
		}

		this.renderer2.appendChild(this.document.body, scriptTag);
	}
}
